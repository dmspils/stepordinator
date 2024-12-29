def on_gesture_shake():
    global Steps
    Steps += 1
    basic.show_number(Steps)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Steps = 0
Steps = 0

def on_forever():
    pass
basic.forever(on_forever)
