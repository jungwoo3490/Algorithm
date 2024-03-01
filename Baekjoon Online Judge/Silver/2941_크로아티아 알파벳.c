#include <stdio.h>
#include <string.h>
int main() {
	char str[1000];
	int i;
	int j = 0;
	int sum = 0;
	int count = 0;
	scanf("%s", str);
	for (i = 0; i < strlen(str); i++) {
		if (str[j] == 'c' && str[j + 1] == '=') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 'c' && str[j + 1] == '-') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 'd' && str[j + 1] == 'z'&& str[j + 2] == '=') {
			count++;
			j = j + 3;
		}
		else if (str[j] == 'd' && str[j + 1] == '-') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 'l' && str[j + 1] == 'j') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 'n' && str[j + 1] == 'j') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 's' && str[j + 1] == '=') {
			count++;
			j = j + 2;
		}
		else if (str[j] == 'z' && str[j + 1] == '=') {
			count++;
			j = j + 2;
		}
		else if (str[j] >='a'&&str[j]<='z') {
			count++;
			j = j + 1;
		}
	}
	printf("%d\n", count);
	return 0;
}