# obsidian-daily-meeting-notes

NOTE. This repository does NOT contain an [Obsidian](https://obsidian.md/) plugin.
The repository contains the files, to set up a way of working, to create meeting notes in an accessible and organised way.
This setup is also described in a more extensive way [here]().

###### Required/used plugins

- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
- [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)
- [QuickAdd](https://github.com/chhoumann/quickadd)

###### The idea

1. Use Calendar with Daily/Periodic notes
2. Use a shortcut to open a prompt to enter a title for a new note from within a Daily note
3. Prefix that name with the date of the daily note
4. Create the note
5. List all notes of the same day, in the daily note, and all notes of the week, on the weekly note.

###### The setup

- Install Calendar + Periodic notes, and configure the daily + weekly template (from this repo)
- Install QuickAdd
- Add 'Choice' with type 'Template' (requires to set a name)
- Configure the template:
- Enable "Set file name format"
- Set it to: `{{MACRO:getFileName::start}}-{{NAME}}`
- Enable "Create in folder", and set it to the daily note folder
- Enable "Open", "New split" and "Focus new pane" (to your preference)
- Click "Manage macros", and enter `getFileName` as name.
- Next to "Obsidian command", select "Copy file path"
- Copy `macro.js` to the root of your vault (from this repo)
- Select/enter it next to "User script" (in QuickAdd)
- Set a Hotkey (like: CMD+Shift+N) in Obsidian settings to the new meeting command (or use it via a pinned command, in command palette)

###### The result

So, let's say you know you will have a meeting "X" on date Y, in week Z, and want to make a note for that meeting:

- You jump to date Y in your calendar,
- launch your command,
- And enter a name ("X").

That's it: now there's a note with name: "X-Y", added to the list of notes for day X and week Z.
