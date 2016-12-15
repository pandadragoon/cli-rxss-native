# README

## RXSS  Generator

The rxss generator generates components, class-components, containers, & stores based off of react and mobx. It is assumed that the file structure is the following

```
. [project folder]
+-- src
| +-- components
| | +-- android
| | +-- ios 
| | +-- shared
| +-- containers 
| +-- stores
+-- test
| +-- components
| +-- containers
| +-- stores
```

### Installing

``` npm i cli-rxss-native -D ``` or ``` yarn add cli-rxss-native -D ```
``` npm i -g cli-rxss-native ```

### Commands

```rxss-native -g [type] -n [name]```

If you are specifying a component (i.e. not a container or store) you must also include ```-t [target]```

The target can be ios, android, or shared.

**The name must either be all lower case or snake-case-syntax in order to name the files properly**

### Available Types
 * component -> Creates a functional react component with spec file.
 * component:mobx -> Creates a functional react component wrapped in mobx-react observer with spec file.
 * class-component -> Creates a class based react component with spec file.
 * class-component:mobx -> Creates a class based react component wrapped in mobx-react observer with spec file.
 * container -> Creates a container react component with spec file.
 * container:mobx -> Creates a container react component wrapped in mobx-react observer with spec file.
 * store -> Creates a mob-x store with spec file.

