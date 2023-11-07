module.exports = {
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'asamir192039@bscse.uiu.ac.bd',

  icon: '/icons/512.png',

  kvPrefix: process.env.KV_PREFIX || '',

  title: "SamFlix",

  baseDirectory: '/',

  maxItems: 1000,

  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}