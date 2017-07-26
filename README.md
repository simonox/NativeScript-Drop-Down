# Example for an Issue

Found an issue in NativeScript-DropDown: https://github.com/PeterStaev/NativeScript-Drop-Down/issues/120

In fact it seems like it is an issue with Telerik UI: https://github.com/telerik/nativescript-ui-feedback/issues/259

## Items in keyboard not visible in iOS

This only happens if you are using RadListView. It is not happening if you are using ListView.

## Steps to reproduce

```
cd demo-ng
npm install
tns install
tns run ios --emulator
```