import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const okGesture = new GestureDescription("ok");

// Thumb and Index form a circle
okGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
okGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// Other fingers extended up
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    okGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
