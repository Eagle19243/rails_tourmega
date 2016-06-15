module CountriesHelper
  def linking_word(index, length)
    if index == length - 2
      "and"
    elsif index == length -1
      ""
    else
      ","
    end
  end
end
