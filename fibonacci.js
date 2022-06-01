function fib(n) {
            if(n<2) return n;
            let current=1;
            let previous=0;
        for(let i=2;i <= n; i++) {
            let temp=current+previous;
            previous=current;
            current=temp;
        }
        return current;
        }
        alert(fib(100));

        //  function fib(n) {
        //      if(n<2) return n;
        //      return fib(n-1)+fib(n-2);
        //  };
        //  alert(fib(10));
