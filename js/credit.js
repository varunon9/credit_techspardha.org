  /* Declaring the global variables */
            var mouseX;
            var mouseY;
            var imageOne;
            var imageTwo;
            var imageThree;
            var imageFour;
            var imageFive;
            var imageSix;
            var imageSeven;
            var imageEight;
            var imageNine;
            var imageTen;
            
            /* Calling the initialization function */
            $(init);
            
            /* The images need to re-initialize on load and on resize, or else the areas
             * where each image is displayed will be wrong. */
            $(window).load(init);
            $(window).resize(init);
            
            /* Setting the mousemove event caller */
            $(window).mousemove(getMousePosition);
            
            /* This function is called on document ready, on load and on resize
             * and initiallizes all the images */
            function init(){
                
                /* Instanciate the mouse position variables */
                mouseX = 0;
                mouseY = 0;
                
                /* Instanciate a HeadImage class for every image */
                imageOne = new HeadImage("one");
                imageTwo = new HeadImage("two");
                imageThree = new HeadImage("three");
                imageFour = new HeadImage("four");
                imageFive = new HeadImage("five");
                imageSix = new HeadImage("six");
                imageSeven=new HeadImage("seven");
                imageEight=new HeadImage("eight");
                imageNine=new HeadImage("nine");
                imageTen=new HeadImage("ten");
                imageEleven=new HeadImage("eleven");
                imageTwelve=new HeadImage("twelve");
                imageThirteen=new HeadImage("thirteen");
                imageFourteen=new HeadImage("fourteen");
                imageFifteen=new HeadImage("fifteen");
                imageSixteen=new HeadImage("sixteen");
                imageSeventeen=new HeadImage("seventeen");
                imageEighteen=new HeadImage("eighteen");
            }
            
            /* This function is called on mouse move and gets the mouse position. 
             * It also calls the HeadImage function to display the correct image*/
            function getMousePosition(event){
                
                /* Setting the mouse position variables */
                mouseX = event.pageX;
                mouseY = event.pageY;
                
                /*Calling the setImageDirection function of the HeadImage class
                 * to display the correct image*/
                imageOne.setImageDirection();
                imageTwo.setImageDirection();
                imageThree.setImageDirection();
                imageFour.setImageDirection();
                imageFive.setImageDirection();
                imageSix.setImageDirection();
                imageSeven.setImageDirection();
                imageEight.setImageDirection();
                imageNine.setImageDirection();
                imageTen.setImageDirection();
                imageEleven.setImageDirection();
                imageTwelve.setImageDirection();
                imageThirteen.setImageDirection();
                imageFourteen.setImageDirection();
                imageFifteen.setImageDirection();
                imageSixteen.setImageDirection();
                imageSeventeen.setImageDirection();
                imageEighteen.setImageDirection();
                
                
            }
            
            
            
var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;

function HeadImage(className){
    
    /* Setting the global instance of classname to the given parameter*/
    this.className = className;
    var Name=$("."+this.className+">.front").attr("alt");
    /* Calculating the borders of the image */
    this.imageLeft = $("."+this.className+">.head-image").offset().left;
    this.imageRight = this.imageLeft + $("."+this.className+">.head-image").width();
    this.imageTop = $("."+this.className+">.head-image").offset().top;
    this.imageBottom = this.imageTop + $("."+this.className+">.head-image").height();
    
    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */
    this.setImageDirection = function(){
        $("."+this.className+">.head-image").css("z-index","0");
        if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
            $("."+this.className+">.up").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
            $("."+this.className+">.up-left").css("z-index","1");
        } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.left").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
            $("."+this.className+">.down-left").css("z-index","1");
        } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
            $("."+this.className+">.down").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
            $("."+this.className+">.down-right").css("z-index","1");
        } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.right").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY < this.imageTop){
            $("."+this.className+">.up-right").css("z-index","1");
        } else{
            $("."+this.className+">.front").css("z-index","1");
            //$(".text-holder").css("display","none");
           // $("."+this.className+".text-holder").css("display","block");
           $("#display_name").text(Name);
           //$("#display_name").text("Varun Kumar");
        }
        
    };
}