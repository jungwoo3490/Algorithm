subjectList = []
total = 0
gradetotal = 0

for i in range(20):
    str = input()
    subject = str.split(" ")
    if subject[2] == 'A+':
        mul = 4.5
    if subject[2] == 'A0':
        mul = 4.0
    if subject[2] == 'B+':
        mul = 3.5
    if subject[2] == 'B0':
        mul = 3.0
    if subject[2] == 'C+':
        mul = 2.5
    if subject[2] == 'C0':
        mul = 2.0
    if subject[2] == 'D+':
        mul = 1.5
    if subject[2] == 'D0':
        mul = 1.0
    if subject[2] == 'F':
        mul = 0
    if subject[2] != 'P':
        total += float(subject[1]) * mul
        gradetotal += float(subject[1])

result = total / gradetotal

print(result)