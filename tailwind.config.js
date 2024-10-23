/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "custom-pattern":  "url('https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/458799067_1066312438197188_8738832615108666864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eDSFymPvC3sQ7kNvgFg11Yr&_nc_ht=scontent.fbkk6-1.fna&_nc_gid=AU9epeQdeXdxpumpvgE6lTE&oh=00_AYCSP2FlrSeNU8SWIHW-Yk-SAZdHn5OlEjfUgIOX7FCE8w&oe=6705DF33')"
    }},
  },
  plugins: [require('daisyui')],
}