import numpy as np
import matplotlib.pyplot as plt

data1 = np.loadtxt('Data_1.txt')


def find_peaks(signal):
    maxima = []
    minima = []

    for i in range(1, len(signal) - 1):
        if signal[i] > signal[i - 1] and signal[i] > signal[i + 1]:
            maxima.append(i)
        if signal[i] < signal[i - 1] and signal[i] < signal[i + 1]:
            minima.append(i)
    
    return maxima, minima

maxima1, minima1 = find_peaks(data1)

plt.figure(figsize=(10, 6))
plt.plot(data1, label='Signal')
plt.scatter(maxima1, data1[maxima1], color='red', label='Maxima')
plt.scatter(minima1, data1[minima1], color='blue', label='Minima')
plt.title('Data_1')
plt.xlabel('Index')
plt.ylabel('Signal Value')
plt.legend()
plt.grid(True)
plt.show()


data2 = np.loadtxt('Data_2.txt')
maxima2, minima2 = find_peaks(data2)

plt.figure(figsize=(10, 6))
plt.plot(data2, label='Signal')
plt.scatter(maxima2, data2[maxima2], color='red', label='Maxima')
plt.scatter(minima2, data2[minima2], color='blue', label='Minima')
plt.title('Data_2')
plt.xlabel('Index')
plt.ylabel('Signal Value')
plt.legend()
plt.grid(True)
plt.show()
