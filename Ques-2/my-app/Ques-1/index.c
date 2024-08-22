#include <stdio.h>
#include <stdlib.h>

void find_peaks(double signal[], int length, int maxima[], int minima[], int *max_count, int *min_count) {
    *max_count = 0;
    *min_count = 0;

    for (int i = 1; i < length - 1; i++) {
        if (signal[i] > signal[i - 1] && signal[i] > signal[i + 1]) {
            maxima[*max_count] = i;
            (*max_count)++;
        }
        if (signal[i] < signal[i - 1] && signal[i] < signal[i + 1]) {
            minima[*min_count] = i;
            (*min_count)++;
        }
    }
}

int read_data_from_file(const char *filepath, double signal[], int max_size) {
    FILE *file = fopen(filepath, "r");
    if (file == NULL) {
        printf("Error: Could not open file %s\n", filepath);
        return -1;
    }

    int i = 0;
    while (fscanf(file, "%lf", &signal[i]) != EOF && i < max_size) {
        i++;
    }

    fclose(file);
    return i;
}

int main() {
    double data1[1000], data2[1000];
    int length1, length2;

    length1 = read_data_from_file("data1.txt", data1, 1000);
    length2 = read_data_from_file("data2.txt", data2, 1000);
    
    if (length1 == -1 || length2 == -1) {
        return 1;
    }

    int maxima1[100], minima1[100];
    int max_count1, min_count1;
    
    int maxima2[100], minima2[100];
    int max_count2, min_count2;
    
    find_peaks(data1, length1, maxima1, minima1, &max_count1, &min_count1);
    find_peaks(data2, length2, maxima2, minima2, &max_count2, &min_count2);

    printf("Maxima for Data 1:\n");
    for (int i = 0; i < max_count1; i++) {
        printf("%d ", maxima1[i]);
    }
    printf("\nMinima for Data 1:\n");
    for (int i = 0; i < min_count1; i++) {
        printf("%d ", minima1[i]);
    }
    
    printf("\nMaxima for Data 2:\n");
    for (int i = 0; i < max_count2; i++) {
        printf("%d ", maxima2[i]);
    }
    printf("\nMinima for Data 2:\n");
    for (int i = 0; i < min_count2; i++) {
        printf("%d ", minima2[i]);
    }

    return 0;
}
