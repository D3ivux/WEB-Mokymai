<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PHP kursas - Login forma</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
            <nav>
                <div class="main-wrapper">
                    <ul>
                        <li><a href="index.php">Home</a></li>
                    </ul>
                    <div class="nav-login">
                        <form>
                            <input type="text" name="uid" placeholder="Username" />
                            <input type="password" name="pwd" placeholder="Password" />
                            <button type="submit" name="submit">Login</button>
                        </form>
                        <a href="signup.php">Sign up</a>
                    </div>
                </div>
            </nav>
        </header>
        <section class="main-container">
            <div class="main-wrapper">
                <h2>Sign Up!</h2>
                <form class="signup-form" method="post" action="signup_handler.php">
                    <input type="text" name="first" placeholder="First Name"/>
                    <input type="text" name="last" placeholder="Last Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="uid" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit" name="submit">Sign Up!</button>
                </form>
            </div>
        </section>
        <?php include_once 'footer.php'; ?>
    </body>
</html>
