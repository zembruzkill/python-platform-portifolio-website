export const snippets = [
  `def star(size):
  size //= 2
  for i in range(-size, size + 1):
      for j in range(-size, size + 1):
          if abs(i) == abs(j) or i == 0 or j == 0:
              print('*', end='')
          else:
              print(' ', end='')
      print()


star(7)`,
`def star(size):
  size //= 2
  for i in range(-size, size + 1):
      for j in range(-size, size + 1):
          if abs(i) == abs(j) or i == 0 or j == 0:
              print('@', end='')
          else:
              print(' ', end='')
      print()


star(7)`
]
