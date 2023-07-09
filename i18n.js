module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  pages: {
    '*': ['common', 'form', 'write']
  },
  logger: () => undefined // dev logger
};
