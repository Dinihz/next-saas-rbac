import {
  createMongoAbility,
  ForcedSubject,
  CreateAbility,
  MongoAbility,
  AbilityBuilder,
} from '@casl/ability'

const actions = ['manage', 'invite', 'delete'] as const
const subjects = ['User', 'all'] as const
type appAbilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]

export type AppAbility = MongoAbility<appAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const { build, can } = new AbilityBuilder(createAppAbility)

can('invite', 'User')

export const ability = build()
