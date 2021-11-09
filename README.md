# Practice JavaScript

## Convert plain text to html

## GSAP Typing Animation

- The `gsap` object serves as the access point for most of GSAP's functionality. It's just a generic object with various methods and properties that create and control Tweens and Timelines.
- A Tween is what does all the animation work.
- Common methods for creating a Tween:
  - `gsap.to()`
  - `gsap.from ()`
  - `gsap.fromTo()`
  - ```js
    // rotate and move elements with a class of 'box' ('x' is a shortcut for a translateX()) over the course of 1 second.
    gsap.to('.box', { rotation: 27, x: 100, duration: 1 });
    ```
- A Timeline is a container for Tweens. It's the ultimate sequencing tool that lets you position animations in time.
- Sequencing things in a Timeline
  - ```js
    const tl = gsap.timeline();
    // sequenced one-after-the-other
    tl.to('.box1', { duration: 2, x: 100 })
      .to('.box2', { duration: 1, y: 200 })
      .to('.box3', { duration: 3, rotation: 360 });
    ```
- Control placement with the position parameter
  - ```js
    // starts at EXACTLY 1.5 seconds from the start of the Timeline:
    tl.to(..., 1.5)
      .to(..., '-=0.75') // overlaps by 0.75 seconds
      .to(..., '+=1'); // adds a 1 second gap  before
    ```
- Controlling Tweens and Timelines

  - `pause()`
  - `play()`
  - `progress()`
  - `restart()`
  - `resume()`
  - `reverse()`
  - `seek()`
  - `time()`
  - `duration()`
  - `timeScale()`
  - `kill()`
  - ```js
    // you only need to created a variable if you want to control it later
    const tween = gsap.to(...);
    const tl = gsap.timeline();
    ti.to(...).to(...);

    tween.pause();
    tween.timeScale(2); // double speed
    tl.seek(3); // jump to 3 seconds in
    tl.progress(0.5); // halfway through
    ```
