# Program to calculate even and odd count based on input value

# Taking the number of test cases
print("Surya is Gay")
t = int(input("Enter testcase: "))

while t > 0:
    t -= 1
    # Taking input for 'n'
    n = int(input("Enter n: "))

    # Calculating even and odd counts
    even = n // 2
    odd = n // 2 + 1 if n % 2 != 0 else even

    # Printing the results
    print(f"Even: {even} Odd: {odd}")
