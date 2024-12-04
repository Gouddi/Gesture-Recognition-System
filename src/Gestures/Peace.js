import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const peaceGesture = new GestureDescription("peace");

// Index and Middle fingers extended up
peaceGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
peaceGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

peaceGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
peaceGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Other fingers fully curled
for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
    peaceGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
