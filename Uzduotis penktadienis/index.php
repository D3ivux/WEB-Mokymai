
<?php
include_once 'includes/db.inc.php';
include_once 'header.php';
?>
<section class="main-container">
    <div class="main-wrapper-content">
        <h2>Home</h2>
        <?php
        if(isset($_SESSION['u_id'])) {
            echo "<p>Prisijungėte sėkmingai</p>";
        } else {
    
            if(isset($_GET['error'])) {
                $error = $_GET['error'];
                if($error == "emptyfields") {
                    echo '<p class="error-msg">Fill in all fields!</p>';
                } elseif($error == "invaliduid") {
                    echo '<p class="error-msg">Invalid username!</p>';
                } elseif($error == "invalidemail") {
                    echo '<p class="error-msg">Invalid email!</p>';
                } elseif($error == "usertaken") {
                    echo '<p class="error-msg">Username is already taken!</p>';
                } elseif($error == "sqlerror") {
                    echo '<p class="error-msg">Database connection error!</p>';
                }
            }

            if(isset($_GET['signup']) && $_GET['signup'] == 'success') {
                echo '<p>Prisijungėte sėkmyngai! <a href="login.php">Prisijungti</a></p>';
            }

        }
        ?>
    </div>
</section>
<?php
include_once 'footer.php';
?>