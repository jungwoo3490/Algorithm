#include <stdio.h>
#include <string.h>
int main() {
	char str[1000];
	int i;
	int sum = 0;
	scanf("%s", str);
	for (i = 0; i < strlen(str); i++) {
		if (str[i] == 'A' || str[i] == 'B' || str[i] == 'C')
			str[i] = 2;
		if (str[i] == 'D' || str[i] == 'E' || str[i] == 'F')
			str[i] = 3;
		if (str[i] == 'G' || str[i] == 'H' || str[i] == 'I')
			str[i] = 4;
		if (str[i] == 'J' || str[i] == 'K' || str[i] == 'L')
			str[i] = 5;
		if (str[i] =='M' || str[i] == 'N' || str[i] == 'O')
			str[i] = 6;
		if (str[i] == 'P' || str[i] == 'Q' || str[i] == 'R' || str[i] == 'S')
			str[i] = 7;
		if (str[i] == 'T' || str[i] == 'U' || str[i] == 'V')
			str[i] = 8;
		if (str[i] == 'W' || str[i] == 'X' || str[i] == 'Y' || str[i] == 'Z')
			str[i] = 9;
	}
	for (i = 0; i < strlen(str); i++) {
		str[i] = str[i] + 1;
	}
	for (i = 0; i < strlen(str); i++) {
		sum += str[i];
	}
	printf("%d\n", sum);
	return 0;
}