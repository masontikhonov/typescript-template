# TypeScript template

## Naming
* Directories: kebab-case (`types`, `db-migrations`).
* Files: kebab-case. Dot-separated postfix indicates entity-type (`user.module.ts`, `user.service.ts`, `time-units.const.ts`).
* Classes: PascalCase (`User`, `UserService`, `ConfigService`).
* Functions, methods, variables: camelCase (`isActive`, `user`, `getAllUsers`).
* Constants: SCREAMING_SNAKE_CASE (`PORT`, `API_KEY`).

## Directory structure

```
src
│   index.ts                    # App entry point
│
└───common                      # Code shared by different modules
│      └───const                # Constants. Each in a separate file with `*.const.ts` postfix
│      └───dto                  # Data transfer objects. Each in a separate file with `*.dto.ts` postfix
│      └───enum                 # Enumerators. Each in a separate file with `*.enum.ts` postfix
│      └───errors               # Errors. Each in a separate file with `*.error.ts` postfix
│      └───interfaces           # Interfaces. Each in a separate file with `*.error.ts` postfix
│      └───types                # Types. Each in a separate file with `*.type.ts` postfix
│
└───todo                        # Todo module
│      │   todo.controller.ts   # Controller
│      │   todo.service.ts      # Business logic of the Todo module
│      │
│      └───dto                  # Data transfer objects. Each in a separate file with `*.dto.ts` postfix
│      └───enum                 # Enumerators. Each in a separate file with `*.enum.ts` postfix
│      └───interfaces           # Interfaces. Each in a separate file with `*.error.ts` postfix
│
└───any-module                  # Any other module. May contain any necessary subdirectories and files as described in Common and Todo
       └───const
       └───dto
       └───enum
       └───...
```
