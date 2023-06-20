def find_eulerian_tour(graph):
    answer = [graph[0][0]]

    for i in range(0, len(graph)):
        answer.append(graph[i][1])

    return answer

print(find_eulerian_tour([(0, 1), (1, 5), (1, 7), (4, 5), (4, 8), (1, 6), (3, 7), (5, 9), (2, 4), (0, 4), (2, 5), (3, 6), (8, 9)]))
