## RoL vs JSX Comparison
Project includes two applications writen using React on Lambda and JSX for comparisons.
<br/>

### Installation
```sh
$ git clone git@github.com:sultan99/rol-vs-jsx.git
$ npm i
$ npm run build
```
<br/>
In `dist` you find two more folders `rol` & `jsx`, open index.html of each folder.

- Close heavy running applications.
- While running test don't leave the page it should be focused.
- Reapeat test several time by pressing `F5` to get more avarage - accuracy result.
- Reapeat the same procedure for the next index.html file.

### Performance test results
- React on Lambda: `8.505500000319444 ms`
- JSX: `9.971500000392552 ms`

Most of time RoL showed faster results from **3%** upto **10%** than JSX version.

### Bundle size
- React on Lambda: `2.03 KB`
- JSX: `2.57 KB`
