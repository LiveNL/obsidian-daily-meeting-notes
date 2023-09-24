# obsidian-daily-meeting-notes

NOTE. This repository does NOT contain an [Obsidian](https://obsidian.md/) plugin.
The repository contains the files, to set up a way of working, to create meeting notes in an accessible and organised way.
This setup is also described in a more extensive way [here](https://medium.com/@jordiwippert/my-obsidian-setup-for-daily-and-meeting-notes-a254beebecc7).

<img width="564" alt="Daily note with listed meeting notes" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/1898d793-da15-42d7-9f2e-5bd13e8e6244">


**Part of the result: Daily note with listed meeting notes for the day.
**

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

###### Screenshots
<img width="753" alt="QuickAdd opts" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/21f71905-35be-47db-8f9f-8c3b067e6ce9">
<img width="685" alt="Prompt to enter note name" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/8f638639-4565-48df-9eee-0316a93ee2ec">
<img width="694" alt="Macro settings" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/b67ae9f0-1f4b-40bf-a749-2c184c89a3d6">


