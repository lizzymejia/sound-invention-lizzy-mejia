while (true) {
    if (input.soundLevel() < 10) {
        light.setAll(light.rgb(212, 50, 203))
    } else if (input.soundLevel() > 10) {
        light.showAnimation(light.rainbowAnimation, 30000)
    }
    
}
