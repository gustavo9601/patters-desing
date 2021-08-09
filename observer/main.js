/*
* Eventos <-- Suscritos diferentes subscriptores --> Lanza funcionalidad
*
* */

var observer = {
    addSubscriber:function (callback) {
        this.subscribers[this.subscribers.length] = callback;
    },
    removeSubscriber:function (callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete(this.subscribers[i]);
            }
        }
    },
    publish:function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](what);
            }
        }
    },
    make:function (o) { // turns an object into a publisher
        for (var i in this) {
            o[i] = this[i];
            o.subscribers = [];
        }
    }
};

var blogger = {
    writeBlogPost:function () {
        var content = 'Today is ' + new Date();
        console.log(content);
        this.publish(content);
    }
};

var la_times = {
    newIssue:function () {
        var paper = 'Martians have landed on Earth!';
        console.log(paper);
        this.publish(paper);
    }
};

observer.make(blogger);
observer.make(la_times);

var jack = {
    read:function (what) {
        console.log('I just read that ' + what)
    }
};

var jill = {
    gossip:function (what) {
        console.log('You didn\'t hear it from me, but ' + what)
    }
};

blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.gossip);
//blogger.writeBlogPost();

blogger.removeSubscriber(jill.gossip);
//blogger.writeBlogPost();

la_times.addSubscriber(jill.gossip);
la_times.addSubscriber(jack.read);
la_times.newIssue();
blogger.writeBlogPost();

console.log(blogger);
console.log(la_times);
console.log(jack);
console.log(jill);
