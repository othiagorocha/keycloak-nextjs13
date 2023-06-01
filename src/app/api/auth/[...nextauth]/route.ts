import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'

export const authConfig = {
  providers: [
    KeycloakProvider({
      clientId: 'nextjs',
      clientSecret: 'zNbejjEPBSRmCVSoSKB7pXqqGbIgSHnu',
      issuer: 'http://host.docker.internal:8080/realms/master'
    })
  ]
}

const handler = NextAuth(authConfig)

export {handler as GET, handler as POST}