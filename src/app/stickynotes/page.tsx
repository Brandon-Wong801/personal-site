"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const StickyNotesPage = () => {
  const [stickyNotes, setStickyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const fetchStickyNotes = async () => {
      const { data, error } = await supabase.from("sticky_notes").select("*");
      if (error) {
        console.error("Error fetching sticky notes:", error.message);
      } else {
        console.log("Fetched sticky notes:", data); // Debug log
        setStickyNotes(data); // Update state
      }
    };

    fetchStickyNotes();

    // Polling for updates every 5 seconds
    const interval = setInterval(() => {
      fetchStickyNotes();
    }, 5000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

  const addStickyNote = async () => {
    if (!newNote.trim()) {
      console.error("Sticky note content cannot be empty.");
      return;
    }

    const userId = "ef73ad36-8be0-4321-ab1f-662df8b4e8f6"; // Example UUID

    const { error } = await supabase
      .from("sticky_notes")
      .insert([
        {
          user_id: userId,
          content: newNote,
          position: { top: Math.round(Math.random() * 500), left: Math.round(Math.random() * 500) },
          color: "yellow",
        },
      ]);

    if (error) {
      console.error("Error adding sticky note:", error.message);
      return;
    }

    // Fetch the updated list of sticky notes
    const { data: updatedNotes, error: fetchError } = await supabase
      .from("sticky_notes")
      .select("*");

    if (fetchError) {
      console.error("Error fetching updated sticky notes:", fetchError.message);
      return;
    }

    setStickyNotes(updatedNotes); // Update the state with the new list of sticky notes
    setNewNote(""); // Clear input after adding
  };

  const deleteStickyNote = async (id: number) => {
    const { error } = await supabase.from("sticky_notes").delete().eq("id", id);
    if (error) console.error(error);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Sticky Notes</h1>

      {/* Add Sticky Note Form */}
      <div className="mb-8">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a new sticky note..."
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={addStickyNote}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Sticky Note
        </button>
      </div>

      {/* Display Sticky Notes */}
      <div className="relative">
        {console.log("Sticky notes state:", stickyNotes)} {/* Debug log */}
        {stickyNotes.map((note) => (
          <div
            key={note.id}
            className="absolute p-4 bg-yellow-200 rounded shadow"
            style={{ top: note.position.top, left: note.position.left }}
          >
            <p>{note.content}</p>
            <button
              onClick={() => deleteStickyNote(note.id)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotesPage;