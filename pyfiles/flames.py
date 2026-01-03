def flames_result(name1, name2):
    # Remove spaces and convert to lowercase
    name1 = name1.replace(" ", "").lower()
    name2 = name2.replace(" ", "").lower()

    # Convert names to lists
    list1 = list(name1)
    list2 = list(name2)

    # Remove common characters
    for ch in name1:
        if ch in list2:
            list1.remove(ch)
            list2.remove(ch)

    # Count remaining characters
    count = len(list1) + len(list2)

    # FLAMES list
    flames = ["F", "L", "A", "M", "E", "S"]

    # Elimination process
    index = 0
    while len(flames) > 1:
        index = (index + count - 1) % len(flames)
        flames.pop(index)

    return flames[0]


# -------- MAIN PROGRAM --------
name1 = input("Enter first name: ")
name2 = input("Enter second name: ")

result = flames_result(name1, name2)

# Result meaning
meaning = {
    "F": "Friends",
    "L": "Love",
    "A": "Affection",
    "M": "Marriage",
    "E": "Enemies",
    "S": "Siblings"
}

print("\n🔥 FLAMES Result 🔥")
print(f"Relationship between {name1} and {name2} is: {meaning[result]}")
