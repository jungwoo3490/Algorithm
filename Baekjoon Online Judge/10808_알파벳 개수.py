str = input()
ascii = 97
alparr = [0 for i in range(26)]
for i in range(len(str)):
    ascii = 97
    for j in range(26):
        if ord(str[i]) == ascii:
            alparr[ascii - 97] += 1
        ascii = ascii + 1

for i in range(len(alparr)):
    print(alparr[i], end=" ")