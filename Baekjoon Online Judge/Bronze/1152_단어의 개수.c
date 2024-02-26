#include <stdio.h>
#include <string.h>
int main() {
	int i = 0;
	char str[1000000];
	int count = 0;
	gets(str);
	for (i = 0; i < strlen(str); i++) {
		if (str[i] == ' ')
			count++;
	}
	if (str[0] == ' ')
		count--;
	if (str[strlen(str) - 1] == ' ')
		count--;
	printf("%d", count + 1);
	return 0;
}
