"""
Sample program to understand the concept of random.
"""

import random

# Dictionary to store names and their assigned numbers
assigned_numbers = {}

# Function to generate a unique random number
def generate_unique_number():
    """
    Generates unique number to the user
    """
    while True:
        num = random.randint(100, 999)  # Generate a 4-digit random number
        if num not in assigned_numbers.values():
            return num

# Taking name as input
name = input("Enter your name: ")

# Assign a unique number if not already assigned
if name in assigned_numbers:
    print(f"{name}, your assigned number is: {assigned_numbers[name]}")
else:
    unique_number = generate_unique_number()
    assigned_numbers[name] = unique_number
    print(f"{name}, your assigned number is: {unique_number}")
