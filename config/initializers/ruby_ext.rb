class Object
  define_method :not do
    Not.new(self)
  end

  class Not
    private *instance_methods.select { |m| m !~ /(^__|^\W|^binding$)/ }

    def initialize(subject)
      @subject = subject
    end

    def method_missing(sym, *args, &blk)
      !@subject.send(sym,*args,&blk)
    end
  end
end

class NilClass
  def to_b
    false
  end
end

class String
  def to_b
    !! (self =~ /\A(t|true|yes|1)\z/i)
  end

  def mask_all_except_last_numbers(no_of_characters, character)
    self.gsub!(/.(?=#{'.'*no_of_characters})/, character) || self.gsub!(/./, character) || ''
  end
end

class Fixnum
  def to_b
    ! (self == 0)
  end
end
