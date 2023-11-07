module.exports = {
  clientId: '4ad40893-3217-4df8-8651-ffbb9cc27e95',
  obfuscatedClientSecret: 'U2FsdGVkX18/uN+PtBGkUIJtdIoI4nIN3b8EuVsydbOhqKnHUq0HnNUdC4NKfaQfSerVitW6bmM471XouhI6nA==',
  
  redirectUri: 'http://localhost',

  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  scope: 'user.read files.read.all offline_access',

  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}