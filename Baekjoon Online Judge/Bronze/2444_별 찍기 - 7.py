n = int(input())

star = -1
blank = n

for i in range(n):
    star += 2
    blank -= 1
    for j in range(blank):
        print(" ", end="")
    for j in range(star):
        print("*", end="")
    print("\n", end="")

for i in range(n-1):
    star -= 2
    blank += 1
    for j in range(blank):
        print(" ", end="")
    for j in range(star):
        print("*", end="")
    if i != n-2:
        print("\n", end="")