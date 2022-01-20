import datetime
import json
import os

print("Hi there! I'm here to help you create a new post in your blog!")

title = ""
while title == "":
    title = input("What is your post title? (required)\n")
    if title == "": print("The post title should not be empty!\n")

description = input("What is your post description? (optional)\n")
date = datetime.datetime.now().strftime("%Y-%m-%d")

print("\nCreating a new post...\n")

metadata = {
    "title": title,
    "description": description,
    "date": date
}

posts_dir = "posts"
path = posts_dir + "/" + date + "-" + title.replace(" ", "-")

try:
    os.mkdir(path)
except:
    print("Something went wrong!")
    print("Aborted creating a new post")
    exit(1)

markdown_file = open(path + "/content.md", "w")
markdown_file.close()

metadata_file = open(path + "/metadata.json", "w")
metadata_file.write(json.dumps(metadata))
metadata_file.close()

print("A new post was created under the directory:")
print(path)
