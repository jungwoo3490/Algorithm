str = input()
str = str.lower()

word = []
count = []

for i in range(len(str)):
    if str[i] not in word:
        word.append(str[i])
        count.append(1)
    else:
        for j in range(len(word)):
            if word[j] == str[i]:
                count[j] += 1

max = count[0]
maxIndex = 0

for i in range(1, len(count)):
    if count[i] > max:
        max = count[i]
        maxIndex = i

result = word[maxIndex]

for i in range(len(count)):
    if count[i] == max and maxIndex != i:
        result = "?"

result = result.upper()

print(result)