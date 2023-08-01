import usersModule from './users'

const services = {
    users: usersModule,
}

export const ServiceFactory = {
    get: name => services[name],
}