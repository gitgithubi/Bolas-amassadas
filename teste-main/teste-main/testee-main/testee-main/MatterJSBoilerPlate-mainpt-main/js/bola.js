class Bola {
    constructor(x, y, r) {
        let options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.2,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.options);
    }

    ballForce() {
        Matter.Body.applyForce(this.body, this.body.position, { x: 20, y: -10 });
    }
}