# Tilt.it

A React library to create tilt effect with ease.

## Usage
```jsx
import Tilt from '@arthurpolon/tilt.it'

const Box = () => {
  const ref = useRef(null)
  
  return <div ref={ref} {...Tilt(ref)}>Your box!</div>
}
```

1. Import the function
2. Create a ref
3. Set the box ref to the previous created ref
4. Call the Tilt function passing the ref and spread its response

## Optional Object
```jsx
<div
  ref={ref}
  {...Tilt(ref, {
    scaleOnClickAmount: 0.9,
    rotationAmount: 40,
    scaleAmount: 1,
    animationDelay: 0.1,
    animationTimingFunction: 'ease-in-out',
  })}
>
  Your box!
</div>
```

The Tilt function accepts a second parameter, a optional object to change the animation values and behavior.
> All the properties in this object are optionals and overwrite the default values
```javascript
    rotationAmount: number; // the amount of rotation when the mouse moves on the box
    scaleAmount: number; // the amount of scale, how much the box grows when the mouse is over
    scaleOnClickAmount: number; // the size of the box when the user click the box
    animationDelay: number; // the delay of the animation in the transition css property
    animationTimingFunction: CSSProperties['transitionTimingFunction']; // the timing function in the transition css property
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
