# Chapter 3: 

## 1. Uninformed Search

These algorithms do not use domain-specific knowledge (heuristics); they explore blindly.

## Breadth-First Search (BFS)

How it works: Explores all nodes at the current depth before moving deeper.
Uses a queue (FIFO).

Applications: Shortest path in unweighted graphs (e.g., navigation, social networks).

Complexity:

  1. Time: O(b^d)

  2. Space: O(b^d)

             b: branching factor, d: depth of the solution

## Depth-First Search (DFS)

How it works: Explores as far as possible down a branch before backtracking.
Uses a stack (LIFO) or recursion.

Applications: Puzzle solvers (e.g., maze, backtracking algorithms).

Complexity:

  1. Time: O(b^m)

  2. Space: O(bm)

             m: maximum depth

## Depth-Limited Search (DLS)

How it works: DFS with a depth limit to prevent going infinitely deep.

Applications: Searching deep or infinite trees where depth is known.

Complexity:

  1. Time: O(b^l)

  2. Space: O(bl)

             l: depth limit

## Iterative Deepening Search (IDS)

How it works: Combines DFS’s low memory with BFS’s completeness by increasing depth limit iteratively.

Applications: Game trees and large search spaces where depth is unknown.

Complexity:

  1. Time: O(b^d)

  2. Space: O(bd)

## Bidirectional Search

How it works: Runs two simultaneous searches from start and goal, meeting in the middle.

Applications: Pathfinding (e.g., GPS systems, AI in games).

Complexity:

  1. Time: O(b^(d/2))

  2. Space: O(b^(d/2))

## 2. Informed Search (Heuristic-Based)

These use domain knowledge (heuristics) to find solutions faster.

## Best-First Search

How it works: Expands the node that appears to be closest to the goal using a heuristic h(n).

Applications: Pathfinding, route planning.

Complexity:

  Time/Space: O(b^n) (depends on heuristic quality)

## A* Search

How it works: Uses both cost to reach node (g(n)) and estimated cost to goal (h(n)):

       f(n) = g(n) + h(n)

Applications: Navigation systems, games, robotics.

Complexity:

   Time/Space: O(b^d) (depends on heuristic quality)

## AO* Algorithm

How it works: Used for AND-OR graphs; useful when some subproblems must be solved together (AND nodes).

Applications: Problem-solving systems, decision trees with dependencies.

Complexity:

  1. Time: Exponential

  2. Space: Depends on graph size and structure

# Chapter 4:

## Hill Climbing

How it works: Chooses the best neighbor based on heuristic; like climbing a hill to reach the peak.

Applications: Optimization problems, AI planning, machine learning.

Complexity:

  1. Time: Varies (can be exponential)

  2. Space: O(1) (uses little memory)

## Beam Search

How it works: Like Best-First, but limits the number of nodes expanded at each level (beam width).

Applications: Machine translation, speech recognition, optimization.

Complexity:

  1. Time: O(bw)

  2. Space: O(bw)

             w: beam width

# Chapter 5:

## Minimax Algorithm

How it works: Used in 2-player games; maximizes your gain, minimizes opponent’s gain.

Applications: Chess, Tic-Tac-Toe, any zero-sum game.

Complexity:

  1. Time: O(b^m)

  2. Space: O(m) (depth of tree)

## Alpha-Beta Pruning

How it works: Optimization over Minimax; prunes branches that won’t affect the final decision.

Applications: Same as Minimax, but more efficient.

Complexity:

  1. Time: O(b^(m/2)) (with perfect ordering)

  2. Space: O(m)