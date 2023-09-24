# obsidian-daily-meeting-notes

NOTE. This repository does NOT contain an [Obsidian](https://obsidian.md/) plugin.
The repository contains the files, to set up a way of working, to create meeting notes in an accessible and organised way.
This setup is also described in a more extensive way [here]().

<img width="564" alt="Screenshot 2023-09-24 at 15 42 12" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/7a5b6f76-dac5-459e-a4f0-4d5a0fa00d15">

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
<img width="685" alt="Screenshot 2023-09-24 at 17 01 48" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/826d827b-39c2-44c7-81c7-d07cb231ff94">
<img width="753" alt="Screenshot 2023-09-24 at 15 43 00" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/d59d4e10-6b2f-4c91-b277-f425e45a5210">
<img width="468" alt="Screenshot 2023-09-24 at 15 40 23" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/a3b6981c-7761-4377-a88c-15013a92ceca">
<img width="694" alt="Screenshot 2023-09-23 at 21 50 31" src="https://github.com/LiveNL/obsidian-daily-meeting-notes/assets/5443727/b25d4711-dd6f-419b-a0fe-3f54661e8f81">
