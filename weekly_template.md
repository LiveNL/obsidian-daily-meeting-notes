##### {{DATE}} notes:
```dataview
list
from "_second_brain/periodic/daily" 
where string(date(file.day).weekyear) = split(split(this.file.name, "-")[1], "W")[1] and string(date(file.day).year) = split(this.file.name, "-")[0]
```
###### Other:
