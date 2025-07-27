"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StickyNote = ({ note, onDelete, onMove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sticky-note",
    item: { id: note.id, position: note.position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "sticky-note",
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const newPosition = {
        top: item.position.top + delta.y,
        left: item.position.left + delta.x,
      };
      onMove(item.id, newPosition);
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`absolute p-4 bg-yellow-200 rounded shadow ${
        isDragging ? "opacity-50" : ""
      }`}
      style={{
        width: "200px",
        height: "150px",
        top: note.position.top,
        left: note.position.left,
      }}
    >
      <p>{note.content}</p>
      <button
        onClick={onDelete}
        className="text-red-500 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

const StickyNotesPage = () => {
  const [stickyNotes, setStickyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const fetchStickyNotes = async () => {
      const { data, error } = await supabase.from("sticky_notes").select("*");
      if (error) {
        console.error("Error fetching sticky notes:", error.message);
      } else {
        setStickyNotes(data);
      }
    };

    fetchStickyNotes();

    const interval = setInterval(() => {
      fetchStickyNotes();
    }, 5000);

    return () => {
      clearInterval(interval);
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

    const { data: updatedNotes, error: fetchError } = await supabase
      .from("sticky_notes")
      .select("*");

    if (fetchError) {
      console.error("Error fetching updated sticky notes:", fetchError.message);
      return;
    }

    setStickyNotes(updatedNotes);
    setNewNote("");
  };

  const updateStickyNotePosition = async (id: number, position: { top: number; left: number }) => {
    const { error } = await supabase
      .from("sticky_notes")
      .update({ position })
      .eq("id", id);

    if (error) {
      console.error("Error updating sticky note position:", error.message);
      return;
    }

    // Update the stickyNotes state immediately
    setStickyNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, position } : note
      )
    );
  };

  const deleteStickyNote = async (id: number) => {
    const { error } = await supabase.from("sticky_notes").delete().eq("id", id);
    if (error) console.error(error);
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
          {stickyNotes.map((note) => (
            <StickyNote
              key={note.id}
              note={note}
              onDelete={() => deleteStickyNote(note.id)}
              onMove={updateStickyNotePosition}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default StickyNotesPage;