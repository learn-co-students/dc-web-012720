class ApplicationController < Sinatra::Base

    set(:views, "app/views")
    set :method_override, true

    get "/" do 
        erb :homepage
    end

    get "/funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number]
        @second = params[:second_number]
        @third = params[:third_number].to_i
        # erb :do_now
        return "<div>hi i am a string</div><ul><li>hi</li><li>sup</li></ul>"
    end

   

end
