import time
import math
begin = input("Press enter to begin benchmarking.")
print("Benchmarking...")

t0 = time.perf_counter()

for i in range(10):
    bignums = [3]
    littlenums = [2]
    mynum = 0
    for x in range(1, 32000):
        bignums.append(bignums[x - 1] * 9)
        littlenums.append(littlenums[x - 1] * 4)
        mynum += bignums[x] * littlenums[x]
    for x in range(3200):
        difference = bignums[x * 10] - littlenums[x * 10]
        mynum -= difference

t1 = time.perf_counter()
score = int(64000 / (t1 - t0))

print("Your score: " + str(score))
end = input("Press enter to exit.")
