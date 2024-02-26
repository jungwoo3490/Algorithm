arr = []
for i in range(9):
	arr.append(int(input()))

sum = sum(arr)

anssum = sum - 100

for i in range(9):
	for j in range(9):
		if arr[i] + arr[j] == anssum:
			result1,result2 = arr[i], arr[j]

arr.remove(result1)
arr.remove(result2)
arr.sort()


for i in range(len(arr)):
	print(arr[i])