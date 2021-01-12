while True:
    if input.sound_level() < 10:
        light.set_all(light.rgb(212,50,203))
    elif input.sound_level() > 10:
        light.show_animation(light.rainbowAnimation, 30000)