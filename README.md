# TODO
- `useSelector` better than passing props
- Use root `var` with `calc` in css to do most transform animation. [Getting Reactive with CSS](https://slides.com/davidkhourshid/getting-reactive-with-css#/17)(這篇文章也跟 Observable Pattern 有關)
  - [An Animated Intro to RxJS](https://css-tricks.com/animated-intro-rxjs/)

# DONE
- stary night/dawn background
  - Optimize: stars (box-shaow) NOT use javascript iterate, set it in css directory instead. Maybe set a js feeder function , and paste the result to css

# NOTE
### React
- svg element shoud created by `createElementNS`
### Performance
- got `Warning`: `.tools-offset` might casuse [CLS](https://web.dev/cls/?utm_source=devtools) 
- Dropped Frame : when glosmorphism style div scroll w/ ract-parallax 
- `Long task` : 65.69ms of 66ms cost on Painting, when glosmorphism style div scroll w/ ract-parallax
### CSS
- `float: right` in `span` to algin w/ div beneath
- could use css-module by naming filename as `[name].module.scss` 


# Others 
### Rxjs + React 
- [High Performance 3D Animation with React + RxJS](https://dev.to/vivavolt/high-performance-3d-animation-with-react-rxjs-3pm2)
- [Amnimating with React Hooks and RxJS](https://amann.me/blog/react-hooks-rxjs-animation-prototype)