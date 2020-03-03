class ApplicationController < ActionController::Base

    helper_method :current_user

    def current_user
        # memoization
        if session[:user_id]
            @current_user ||= User.find(session[:user_id])
        else
            @current_user = nil
        end
        return @current_user
    end

    def logged_in?
        !!current_user
    end

    def admin
        flash[:login_warning] = "You must be an admin to do that"
        redirect_to login_path unless current_user.admin
    end

    def authorized
        flash[:login_warning] = "You must be logged in to see that page"
        redirect_to login_path unless logged_in?
    end
end
