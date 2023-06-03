
/**
 * --------------------------------------------------
 *                      BASIC
 * --------------------------------------------------
 * 
 * 1. Do not show the link to them who should not see it.
 * 2. Only show to the person/types of user who should see it 
 * 3 . Do not allowed  to visit the link  by typing on the url 
 *     use AdminRoute that will check whether the user is  admin or not
 *     if not admin redirect to any other page . you could logout user and 
 *     send them to the login page as well .
 * ------------------------
 *        TO SEND DATA      
 * --------------------------------
 * 1. Verify  jwt token (send authorization token in the header to the server).
 *    if possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity .Make sure only admin user is posting data 
 *    by using verifyAdmin
 * 3. 
 * */ 
